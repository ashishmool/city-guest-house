package com.cityguesthouse.cgh.service.impl;

import com.cityguesthouse.cgh.entity.SystemUser;
import com.cityguesthouse.cgh.pojo.AuthenticateRequest;
import com.cityguesthouse.cgh.pojo.AuthenticateResponse;
import com.cityguesthouse.cgh.repo.SystemUserRepo;
import com.cityguesthouse.cgh.security.JwtService;
import com.cityguesthouse.cgh.service.AuthenticateService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticateServiceImpl implements AuthenticateService {

    private final SystemUserRepo systemUserRepo;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticateRequest.getEmail(), authenticateRequest.getPassword()
                )
        );

        SystemUser systemUser =systemUserRepo.findByEmail(authenticateRequest.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("User not found."));

        UserDetails userDetails = systemUser;

        String jwtToken = jwtService.generateToken(userDetails);
        return AuthenticateResponse.builder().token(jwtToken).role(systemUser.getRole())
                .userId(systemUser.getUserId()).email(systemUser.getEmail()).build();
    }
}
