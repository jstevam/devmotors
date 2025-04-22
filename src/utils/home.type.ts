export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      banner: {
        url: string;
      };
      heading: string;
      cta_button: {
        title: string;
        url: string;
      };
      about: {
        description: string;
        banner: {
          url: string;
        };
      };
      services: ServiceProps[];
      contact: {
        email: string;
        telefone: string;
        endereco: string;
        horario: string;
      };
    };
  };
}

interface ServiceProps {
  imagem: {
    url: string;
  };
  description: string;
}
