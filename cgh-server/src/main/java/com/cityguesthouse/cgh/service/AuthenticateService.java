package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.pojo.AuthenticateRequest;
import com.cityguesthouse.cgh.pojo.AuthenticateResponse;

public interface AuthenticateService {

    AuthenticateResponse authenticate(AuthenticateRequest authenticateRequest);
}
