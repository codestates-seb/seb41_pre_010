package com.backend.sever.jwt.configration;

import com.backend.sever.jwt.filter.JwtAuthenticationFilter;
import com.backend.sever.jwt.filter.JwtVerificationFilter;
import com.backend.sever.jwt.auth.handler.UserAuthenticationFailureHandler;
import com.backend.sever.jwt.auth.handler.UserAuthenticationSuccessHandler;
import com.backend.sever.jwt.token.JwtTokenizer;
import com.backend.sever.jwt.utils.CustomAuthorityUtils;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import javax.servlet.http.Cookie;
import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 * Role 기반 리소스 접근 권한 부여(MemberController만)
 */
@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils; // 추가

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
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
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
//                            .antMatchers(HttpMethod.GET, "/*/access-token/**").hasRole("ADMIN")  // 추가
//                    .antMatchers(HttpMethod.GET, "/api/v1/users/**").hasRole("USER")     // <--  이 부분 주석 풀고 적용됨

//                    .antMatchers(HttpMethod.GET, "/*/api/v1/users").hasRole("ADMIN")     // 추가
//                    .antMatchers(HttpMethod.GET, "/*/api/v1/users/**").hasAnyRole("USER", "ADMIN")  // 추가
//                    .antMatchers(HttpMethod.DELETE, "/*/api/v1/users/**").hasRole("USER")  // 추가
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

            JwtAuthenticationFilter jwtAuthenticationFilter_token = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);

            JwtAuthenticationFilter jwtAuthenticationFilter_sign = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);

            jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/users/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());
//
//            jwtAuthenticationFilter_token.setFilterProcessesUrl("/api/v1/users/refresh-token");
//            jwtAuthenticationFilter_token.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
//            jwtAuthenticationFilter_token.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

//            JwtVerificationFilter jwtVerificationFilter_token = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
//



            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);

//            builder
//                    .addFilter(jwtAuthenticationFilter_token)
//                    .addFilterAfter(jwtVerificationFilter_token, JwtAuthenticationFilter.class);
//



        }


    }



}
