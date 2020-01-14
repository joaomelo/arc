export default {
  components: {
    controls: {
      wrapper: {
        requiredError: 'Insira valor'
      },
      email: {
        email: 'Email',
        placeholder: 'Digite email'
      },
      password: {
        password: 'Senha',
        placeholder: 'Digite senha'
      }
    }
  },
  modules: {
    auth: {
      login: 'Login',
      logout: 'Logout de {user}',
      loginError: 'Erro ao tentar login'
    }
  }
  // collections: {
  //   asset: 'Ativo | Ativos',
  //   result: 'Resultado | Resultados',
  //   challenge: 'Desafio | Desafios',
  //   team: 'Time | Times'
  // },
  // nav: {
  //   account: 'Preferências',
  //   logout: 'Sair de {user}'
  // },
  // forms: {
  //   edit: 'Editar',
  //   delete: 'Excluir',
  //   new: 'Novo {col}',
  //   save: 'Salvar',
  //   cancel: 'Cancelar'
  // },
  // fields: {
  //   common: {
  //     title: 'Título'
  //   },
  //   account: {
  //     language: 'Idioma'
  //   },
  //   assets: {
  //     alias: 'Apelido'
  //   },
  //   teams: {
  //     parent: 'Ascendente',
  //     owner: 'Proprietário',
  //     managers: 'Gestores',
  //     staff: 'equipe',
  //     defaultTeam: 'time do {user}'
  //   }
  // }
};
