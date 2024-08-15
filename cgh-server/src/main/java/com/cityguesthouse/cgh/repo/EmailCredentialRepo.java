package com.cityguesthouse.cgh.repo;


import com.cityguesthouse.cgh.entity.EmailCredential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailCredentialRepo extends JpaRepository<EmailCredential, Long> {
    @Query(value = "select * from email_credentials where active='true' ORDER BY date desc limit 1", nativeQuery = true)
    EmailCredential findOneByActive();

}
