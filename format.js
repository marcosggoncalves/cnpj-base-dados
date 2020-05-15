class Format {
    object(linha, arquivo_id = null) {
        if (linha.substr(0, 1).trim() === '1') {
            return {
                "cnpj": linha.substr(3, 14).trim(),
                "tipo": linha.substr(0, 1).trim(),
                "razaoSocial": linha.substr(18, 150).trim(),
                "nomeFantasia": linha.substr(167, 55).trim(),
                "situacaoCadastral": linha.substr(224, 2).trim(),
                "dataSituacaoCadastral": linha.substr(225, 8).trim(),
                "motivoSituacaoCadastrao": linha.substr(233, 2).trim(),
                "nomeCidadeExterior": linha.substr(235, 2).trim(),
                "codigoPais": linha.substr(290, 3).trim(),
                "nomePais": linha.substr(293, 70).trim(),
                "codigoNaturezaJuridica": linha.substr(363, 4).trim(),
                "dataInicioAtividade": linha.substr(363, 8).trim(),
                "cnaeFiscal": linha.substr(375, 7).trim(),
                "descricaoTipoLogradouro": linha.substr(382, 20).trim(),
                "logradouro": linha.substr(402, 60).trim(),
                "numeroLogradouro": linha.substr(462, 6).trim(),
                "complemento": linha.substr(468, 156).trim(),
                "bairro": linha.substr(624, 50).trim(),
                "cep": linha.substr(674, 8).trim(),
                "uf": linha.substr(682, 2).trim(),
                "codigoMunicipio": linha.substr(684, 4).trim(),
                "municipio": linha.substr(688, 50).trim(),
                "telefone1": linha.substr(738, 12).trim(),
                "telefone2 ": linha.substr(750, 12).trim(),
                "telefone3": linha.substr(762, 12).trim(),
                "email": linha.substr(774, 115).trim(),
                "qualificacaoResponsavel": linha.substr(880, 2).trim(),
                "capitalSocialEmpresa": linha.substr(891, 14).trim(),
                "porteEmpresa": linha.substr(901, 2).trim(),
                "opcaoPeloSimples": linha.substr(907, 1).trim(),
                "dataOpcaoPeloSimples": linha.substr(908, 8).trim(),
                "dataExclusaoSimples": linha.substr(916, 8).trim(),
                "opcaoPeloMei": linha.substr(924, 1).trim(),
                "situacaoEspecial": linha.substr(925, 23).trim(),
                "dataSituacaoEspecial": linha.substr(948, 8).trim(),
                "arquivo_id": arquivo_id
            };
        }
        if (linha.substr(0, 1).trim() === '2') {
            return {
                "cnpj": linha.substr(3, 14).trim(),
                "identificadorSocio": linha.substr(17, 1).trim(),
                "nomeSocio": linha.substr(18, 150).trim(),
                "cnpjSocio": linha.substr(168, 14).trim(),
                "codQualificacaoSocio": linha.substr(182, 2).trim(),
                "percentualCapitalSocial": linha.substr(184, 5).trim(),
                "dataEntradaSociedade": linha.substr(189, 8).trim(),
                "codPais": linha.substr(197, 3).trim(),
                "nomePais": linha.substr(200, 70).trim(),
                "cpfRepresentanteLegal": linha.substr(270, 11).trim(),
                "nomeRepresentante": linha.substr(281, 60).trim(),
                "codQualificacaoRepresentante": linha.substr(341, 2).trim(),
                "arquivo_id": arquivo_id
            };
        }

        return {};
    }
    array(linha, arquivo_id = null) {
        if (linha.substr(0, 1).trim() === '1') {
            let cadastro = [
                linha.substr(3, 14).trim(),
                linha.substr(0, 1).trim(),
                linha.substr(18, 150).trim(),
                linha.substr(167, 55).trim(),
                linha.substr(224, 2).trim(),
                linha.substr(225, 8).trim(),
                linha.substr(233, 2).trim(),
                linha.substr(235, 2).trim(),
                linha.substr(290, 3).trim(),
                linha.substr(293, 70).trim(),
                linha.substr(363, 4).trim(),
                linha.substr(363, 8).trim(),
                linha.substr(375, 7).trim(),
                linha.substr(382, 20).trim(),
                linha.substr(402, 60).trim(),
                linha.substr(462, 6).trim(),
                linha.substr(468, 156).trim(),
                linha.substr(624, 50).trim(),
                linha.substr(674, 8).trim(),
                linha.substr(682, 2).trim(),
                linha.substr(684, 4).trim(),
                linha.substr(688, 50).trim(),
                linha.substr(738, 12).trim(),
                linha.substr(750, 12).trim(),
                linha.substr(762, 12).trim(),
                linha.substr(774, 115).trim(),
                linha.substr(880, 2).trim(),
                linha.substr(891, 14).trim(),
                linha.substr(901, 2).trim(),
                linha.substr(907, 1).trim(),
                linha.substr(908, 8).trim(),
                linha.substr(916, 8).trim(),
                linha.substr(924, 1).trim(),
                linha.substr(925, 23).trim(),
                linha.substr(948, 8).trim(),
                arquivo_id
            ];

            return cadastro;
        }
        if (linha.substr(0, 1).trim() === '2') {
            let socios = [
                linha.substr(3, 14).trim(),
                linha.substr(17, 1).trim(),
                linha.substr(18, 150).trim(),
                linha.substr(168, 14).trim(),
                linha.substr(182, 2).trim(),
                linha.substr(184, 5).trim(),
                linha.substr(189, 8).trim(),
                linha.substr(197, 3).trim(),
                linha.substr(200, 70).trim(),
                linha.substr(270, 11).trim(),
                linha.substr(281, 60).trim(),
                linha.substr(341, 2).trim(),
                arquivo_id
            ];

            return socios;
        }

        if (linha.substr(0, 1).trim() === '6') {
            let cnaes = [
                linha.substr(0, 1).trim(),
                linha.substr(3, 14).trim(),
                linha.substr(17, 7).trim()
            ];

            return cnaes;
        }

        return [];
    }
}

module.exports = new Format();