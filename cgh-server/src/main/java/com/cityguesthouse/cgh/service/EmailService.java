package com.cityguesthouse.cgh.service;

import com.cityguesthouse.cgh.pojo.EmailRequest;

public interface EmailService {

    void resetPassword(EmailRequest emailRequest);
}
