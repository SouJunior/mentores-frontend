export const authErrorMessages = {
  'invalid e-mail or password': 'Email ou senha incorretos.',
  'your account is not activated yet. check your e-mail inbox for instructions':
    'Sua conta ainda não foi ativada. Verifique sua caixa de entrada de e-mail para instruções.',
  "you typed the password incorrectly and will be blocked in five tries. to register a new password click on 'forgot my password'":
    "Você digitou a senha incorretamente e será bloqueado após cinco tentativas. Para cadastrar um nova senha clique em 'Esqueci a senha'.",
  "your account access is still blocked, because you dont redefined your password after five incorrect tries, please, click on 'forgot my password' to begin the account restoration.":
    "Por questões de segurança, bloqueamos sua conta após você ter atingido a quantidade máxima de tentativas de acesso. Para cadastrar uma nova senha, clique em 'Esqueci minha senha'.",
  'The date must be before the current date': 'Data de nascimento inválida',
  'Bad Request: User already exists': 'O e-mail informado já possui cadastro.',
};

export type AuthErrorAlert = {
  title: string;
  description?: string;
};

/**
 * Conteúdo do banner de erro (título + descrição) exibido no formulário.
 * Complementa `authErrorMessages` (usado pelos toasts), sem substituí-lo.
 */
export const authErrorAlerts: { [key: string]: AuthErrorAlert } = {
  'invalid e-mail or password': {
    title: 'E-mail ou senha incorretos.',
    description:
      'Você digitou a senha incorretamente e será bloqueado após 5 tentativas.',
  },
  "you typed the password incorrectly and will be blocked in five tries. to register a new password click on 'forgot my password'":
    {
      title: 'E-mail ou senha incorretos.',
      description:
        'Você digitou a senha incorretamente e será bloqueado após 5 tentativas.',
    },
  'your account is not activated yet. check your e-mail inbox for instructions':
    {
      title: 'Conta ainda não ativada.',
      description:
        'Verifique sua caixa de entrada de e-mail para concluir a ativação.',
    },
  "your account access is still blocked, because you dont redefined your password after five incorrect tries, please, click on 'forgot my password' to begin the account restoration.":
    {
      title: 'E-mail ou senha incorretos.',
      description:
        'Por questões de segurança, bloqueamos sua conta após você ter atingido a quantidade máxima de 5 tentativas.',
    },
};

export const defaultAuthErrorAlert: AuthErrorAlert = {
  title: 'Algo deu errado.',
  description: 'Não foi possível entrar agora. Tente novamente em instantes.',
};
