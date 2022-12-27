package com.backend.sever.jwt.configration;


import com.backend.sever.jwt.auth.handler.UserAccessDeniedHandler;
import com.backend.sever.jwt.auth.handler.UserAuthenticationEntryPoint;
import com.backend.sever.jwt.filter.JwtVerificationFilter;
import com.backend.sever.jwt.auth.handler.UserAuthenticationFailureHandler;
import com.backend.sever.jwt.auth.handler.UserAuthenticationSuccessHandler;

import com.backend.sever.jwt.filter.JwtAuthenticationFilter;
import com.backend.sever.jwt.token.JwtTokenizer;
import com.backend.sever.jwt.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 * authenticationEntryPoint와 accessDeniedHandler 추가
 */
//@Configuration
//@EnableWebSecurity(debug = true)
public class SecurityConfigurationV6 {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가

    public SecurityConfigurationV6(JwtTokenizer jwtTokenizer,
                                   CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers().frameOptions().sameOrigin()
            .and()
            .csrf().disable()
            .cors(withDefaults())
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .authenticationEntryPoint(new UserAuthenticationEntryPoint())  // 추가
            .accessDeniedHandler(new UserAccessDeniedHandler())            // 추가
            .and()
            .apply(new CustomFilterConfigurer())
            .and()
            .authorizeHttpRequests(authorize -> authorize
                    .antMatchers(HttpMethod.POST, "/*/users/**").authenticated()
//                    .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("USER")
                    .antMatchers(HttpMethod.GET, "/*/users/**").authenticated()
////                    .mvcMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")
//                    .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER", "ADMIN")
//                    .antMatchers(HttpMethod.DELETE, "/*/users/**").hasRole("USER")
//                    .antMatchers(HttpMethod.POST, "/*/users").hasRole("ADMIN")
//                    .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("ADMIN")
//                    .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER", "ADMIN")
//                    .antMatchers(HttpMethod.GET, "/*/users").permitAll()
//                    .antMatchers(HttpMethod.DELETE, "/*/users").hasRole("ADMIN")
//                    .antMatchers(HttpMethod.POST, "/*/users").hasRole("USER")
//                    .antMatchers(HttpMethod.PATCH, "/*/users").hasAnyRole("USER", "ADMIN")
//                    .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER", "ADMIN")
//                    .antMatchers(HttpMethod.DELETE, "/*/users").hasRole("USER")
                    .anyRequest().permitAll()
            );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                .addFilter(jwtAuthenticationFilter)
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
