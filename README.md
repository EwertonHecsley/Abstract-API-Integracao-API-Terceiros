Coletando Dados de Empresas - API
Essa é uma API que permite descobrir e guardar dados de empresas, como ano de fundação, ramo, número de funcionários, cidade, país e outros detalhes. Ela utiliza a Company Enrichment API do site Abstract API para obter essas informações a partir dos domínios dos sites das empresas.

Como Utilizar a API
A API possui apenas um recurso:

GET /empresas

Este recurso deve ser acessado através do endereço http://localhost:3000/empresas. Ele recebe requisições GET e exige um parâmetro obrigatório na rota chamado dominioEmpresa.

Ao receber o domínio da empresa como parâmetro, a API enviará a consulta à API externa para obter os dados da empresa correspondente.

Autenticação na API Externa
Para autenticar-se na API externa, utilizamos a chave de teste fornecida pelo Abstract API. Para gerar essa chave, siga as instruções abaixo:

Crie uma conta no site Abstract API.
Após criar a conta, na página inicial da Dashboard, escolha a API "Company Enrichment".
Na página da API, você encontrará a chave de autenticação ("api_key") que deve ser usada para autenticar na API externa.
Exemplo de Uso
Aqui está um exemplo de como usar a API:

bash
Copy code
GET http://localhost:3000/empresas?dominioEmpresa=exemplo.com&api_key=SUA_CHAVE_DE_TESTE
Neste exemplo, substitua exemplo.com pelo domínio da empresa que deseja consultar e SUA_CHAVE_DE_TESTE pela chave de autenticação fornecida pelo Abstract API.

Resposta da API
Independente de como os dados são retornados da API externa, nossa API armazenará os resultados no array do arquivo empresas.json, seguindo a seguinte regra:

Apenas os resultados cujo nome da empresa (propriedade "name" do objeto retornado) esteja preenchido corretamente (não venha com null ou undefined) serão guardados no array.
O objeto retornado pela nossa API será exatamente o mesmo objeto retornado pela API externa.

Performance
Para garantir a performance, utilizamos programação assíncrona tanto para consultar a API externa usando axios quanto para ler e escrever o arquivo JSON.

Observações
Certifique-se de que você possui a chave de autenticação do Abstract API para utilizar corretamente a API.
Apenas empresas cujo nome seja válido serão armazenadas no arquivo empresas.json.
Referências
Abstract API
Company Enrichment API
