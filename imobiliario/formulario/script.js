        <script>
          document.getElementById('whatsapp-button').addEventListener('click', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const valorImovel = document.getElementById('valor_imovel').value;
            const cidade = document.getElementById('cidade').value;

            if (!nome || !valorImovel || valorImovel === 'R$ 0,00' || !cidade) {
              alert('Por favor, preencha os campos obrigatórios para continuar.');
              return;
            }

            const whatsappNumber = '5561991116565';
            const message = `Olá, HorizonCred! 👋\n\nDesejo uma simulação de financiamento imobiliário.\n\n*Nome:* ${nome}\n*Valor do Imóvel:* ${valorImovel}\n*Localização:* ${cidade}\n\nAguardo retorno. Obrigado!`;
            const encodedMessage = encodeURIComponent(message);
            const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(url, '_blank');
          });

          const currencyInput = document.getElementById('valor_imovel');
          currencyInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (!value) {
              e.target.value = '';
              return;
            }
            const numberValue = parseFloat(value) / 100;
            const formattedValue = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2
            }).format(numberValue);

            e.target.value = formattedValue;
          });
        </script>