import dayjs from 'dayjs';
import { ICadastroDoacao } from 'app/shared/model/cadastro-doacao.model';
import { ISolicitacao } from 'app/shared/model/solicitacao.model';
import { IUser } from 'app/shared/model/user.model';

export interface IAcao {
  id?: number;
  dataAcao?: string | null;
  usuarioCriacaoAcao?: string | null;
  pendente?: boolean | null;
  dataExecucaoAcao?: string | null;
  ativa?: boolean | null;
  observacoes?: string | null;
  cadastroDoacao?: ICadastroDoacao | null;
  solicitacao?: ISolicitacao | null;
  user?: IUser | null;
}

export const defaultValue: Readonly<IAcao> = {
  pendente: false,
  ativa: false,
};
