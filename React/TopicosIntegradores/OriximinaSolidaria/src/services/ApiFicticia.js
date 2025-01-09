import criancas from '../assets/criancas.jpeg';
import idosos from '../assets/idosos.jpg';
import cachorro from '../assets/cachorro.jpg'

export const campanhasFicticias = [
    {
        id: 1,
        titulo: "Arrecadação para Crianças",
        descricao: "Apoie a educação de crianças em situação de vulnerabilidade.",
        meta: "R$ 10.000,00",
        arrecadado: "R$ 3.500,00",
        imagem: criancas
    },{
        id: 2,
        titulo: "Patinhas do Coração",
        descricao: "Max é um cãozinho especial que encanta a todos com sua alegria e resiliência. Após um acidente, Max perdeu uma de suas patas, mas isso não o impediu de ser um exemplo de amor e superação. No entanto, ele precisa de nossa ajuda para dquirir uma prótese personalizada que permitirá ao Max se movimentar com mais facilidade.",
        meta: "R$ 5.000,00",
        arrecadado: "R$ 2.000,00",
        imagem: cachorro
    },{
        id: 3,
        titulo: "Assistência a Idosos Carentes",
        descricao: "Ajude a oferecer cuidados a idosos que não têm apoio familiar.",
        meta: "R$ 8.000,00",
        arrecadado: "R$ 5.200,00",
        imagem: idosos
    }];