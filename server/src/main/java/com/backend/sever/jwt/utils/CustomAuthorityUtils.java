package com.backend.sever.jwt.utils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthorityUtils {

    @Value("${mail.address.admin}")
    private String adminMailAddress;

    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN",  "ROLE_USER");
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN","USER");

    private final List<String> USER_ROLES_STRING = List.of("USER");

    // 메모리 상의 ROLE 기반 권한정보 생성
    public List<GrantedAuthority> createAuthorities(String email){
        if(email.equals(adminMailAddress)){
            return ADMIN_ROLES;

        }
        return USER_ROLES;
    }

    // DB저장된 ROLE기반 권한정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles){
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_"+ role))
                .collect(Collectors.toList());

        return authorities;

    }
    // DB저장용도
    public List<String> createRoles(String email){
        if(email.equals(adminMailAddress)){
            return ADMIN_ROLES_STRING;

        }

        return USER_ROLES_STRING;
    }



}
