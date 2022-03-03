package org.com.biomob.repository;

import java.util.List;
import org.com.biomob.domain.Solicitacao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Solicitacao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
    @Query("select solicitacao from Solicitacao solicitacao where solicitacao.user.login = ?#{principal.username}")
    List<Solicitacao> findByUserIsCurrentUser();
}
