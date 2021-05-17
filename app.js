const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
require('./models/orcamento');
const Home = mongoose.model('Home');
const Orcamento = mongoose.model('Orcamento');
const app =express();
app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",["http://localhost:3000","http://localhost:8080"]);
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","X-PINGOTHER,Content-Type,Authorization");
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser:true,
 useUnifiedTopology:true}).then(()=>{console.log("Conexão com o BD MONGODB realizada com sucesso!");}).catch((err)=>{
    console.log( err +" erro: Conexão com o BD MONGODB sem sucesso!");
});
app.get('/',async(req,res)=>{
    await Home.findOne({}).then((home)=>{
        return res.json({
            error:false,
            home:home,
        });
    }).catch((err) =>{
        return res.status(400).json({
            error:true,
            message: "Nenhum registro encontrado"
        })
    })
});
app.get('/home',async(req,res)=>{
    await Home.findOne({}).then((home)=>{
        return res.json({
            error:false,
            home:home,
        });
    }).catch((err) =>{
        return res.status(400).json({
            error:true,
            message: "Nenhum registro encontrado"
        })
    })
});
app.post('/home', async (req,res)=>{
    const dados={
        "topTitulo":"Temos a sulução que a sua empresa necessita!",
        "topSubTitulo":"Venha e consulte ou faça seu orçamento",
        "topTextobtn":"Orçamento",
        "topLinkBtn":"/orcamento",
        "serTitulo":"Serviços",
        "serSubTitulo":"Todos os serviços devem ser consultados antes de serem contratados",
        "serUmIcon":"wifi",
        "serUmTitulo":"Configuração de Aparelhos de Redes",
        "serUmDescricao":"Configuração de roteadores, balanceadores, unifi, eaps, antenas para internet, computadores entre outros",
        "serDoisIcon":"tools",
        "serDoisTitulo":"Instalação e manutenção de Micro",
        "serDoisDescricao":"Configuração de roteadores, balanceadores, unifi, eaps, antenas para internet, computadores entre outros",
        "serTresIcon":"network-wired",
        "serTresTitulo":"Instalação e Manutenção de rede Interna",
        "serTresDescricao":"Configuração de roteadores, balanceadores, unifi, eaps, antenas para internet, computadores entre outros",
        "serQuatroIcon":"network-wired",
        "serQuatroTitulo":"Instalação e Manutenção de CFTV",
        "serQuatroDescricao":"Configuração de roteadores, balanceadores, unifi, eaps, antenas para internet, computadores entre outros",
        "serCincoIcon":"network-wired",
        "serCincoTitulo":"Desenvolvimento de Software e aplicativos",
        "serCincoDescricao":"Configuração de roteadores, balanceadores, unifi, eaps, antenas para internet, computadores entre outros"
        
    }
    const homeExiste=await Home.findOne({});
        if(homeExiste){
            return res.status(400).json({
                error:true,
                message:"Erro: A pagina home ja possui um registro"
            });
        }
    await  Home.create(dados,(err)=>{
        if(err) return res.status(400).json({
            error:true,
            message:"ERRO: Conteudo da pagina home não cadastrado com sucesso"
        });
    });
    return res.json({
        error:false,
        message:"Conteudo da pagina home cadastrado com sucesso"

    })
});
app.post('/orcamento', async (req,res)=>{
   
    await  Orcamento.create(req.body,(err)=>{
        if(err){ return res.status(400).json({
            error: true,
            message:"ERRO: Solicitação de orçamento não enviada"
        });
    }else{
    return res.json({
        error: false,
        message:"Solicitação de orçamento enviada com sucesso"

    });
}
});
});
app.listen(8080, function(){
    console.log('servidor iniciado na porta 8080: http://localhost:8080');
}); 