package org.kssoft.gallery.backend.repository;

import org.kssoft.gallery.backend.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByEmailAndPassword(String email, String Password);

}
