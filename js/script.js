class FundoImobiario{
    constructor(){
        /*this.codigoAtivo = '';
        this.valorDividendo = 0
        this.valorAtivo = 0
        this.valorReceber = 0;*/
    }

    salvar(){
        var fundo = this.lerDados();
        if(this.validarCampos(fundo)){
            this.calcularDividendos(fundo);
        }
        this.cancelar();
    }



    /*formatar moeda*/
 

    calcularDividendos(fundo){
        try{
            var totalInvestir = (parseFloat(fundo.valorDoAtivo)*parseFloat(fundo.valorReceber))/parseFloat(fundo.valorDividendo);
            document.getElementById('lblCodigoFundo').innerText = fundo.codigoAtivo;
            document.getElementById('lblTotalReceber').innerText = formatarMoeda.format(fundo.valorReceber);
            document.getElementById('lblTotalInvestir').innerText = formatarMoeda.format(totalInvestir);
        }
        catch(erroException){
            alert("Ocorreu um erro inesperado! \n" + erroException);
        }
    }
    lerDados(){
        var $fundoImobiliario = {};
        $fundoImobiliario.codigoAtivo = document.getElementById('txtCodigoAtivo').value;
        $fundoImobiliario.valorDividendo = document.getElementById('txtValorDividendo').value;
        $fundoImobiliario.valorDoAtivo = document.getElementById('txtValorDoAtivo').value;
        $fundoImobiliario.valorReceber = document.getElementById('txtValorReceber').value;

        return $fundoImobiliario;
    }
    cancelar(){
        document.getElementById('txtCodigoAtivo').value = "";
        document.getElementById('txtValorDividendo').value = "";
        document.getElementById('txtValorDoAtivo').value = "";
        document.getElementById('txtValorReceber').value = "";
    }
    validarCampos(fundo){

        var msg ="";
        if(fundo.codigoAtivo == ''){
            msg += 'Por favor! Preencha o campo codigo ativo! \n';
            document.getElementById('txtCodigoAtivo').focus();
        }
        if(fundo.valorDividendo == ''){
            msg += 'Por favor! Preencha o campo valor dividendo! \n';
            document.getElementById('txtValorDividendo').focus();
        }
        if(fundo.valorDoAtivo == ''){
            msg += 'Por favor! Preencha o campo valor do ativo! \n';
            document.getElementById('txtValorDoAtivo').focus();
        }
        if(fundo.valorReceber == ''){
            msg += 'Por favor! Preencha o campo valor receber! \n';
            document.getElementById('txtValorReceber').focus();
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

}


var fii = new FundoImobiario();

/*Formatar Moeda*/
var formatarMoeda = new Intl.NumberFormat("pt-Br",{
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});

//btn Calcular.
var $btnCalcular =  document.getElementById('btnConfirmar');
$btnCalcular.addEventListener('click', function(){
    fii.salvar();
});


//btn cancelar.
var $btnCancelar = document.getElementById('btnCancelar');
$btnCancelar.addEventListener('click', function(){
    fii.cancelar();
});