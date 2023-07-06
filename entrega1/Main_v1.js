const prompt = require("prompt-sync")({sigint : true})
class Sistema {

    constructor(){
        this.funcionarios = {};
        this.clientes = {};
        this.pets = {};
        this.consultas = {};
    }

    Inicio_app(){
        let on = 1;
        while(on == true){
            let est_inc = Number(prompt("Ola, seja bem vindo! Digite uma das opções abaxo para prossegui: \n1. Fazer Login \n2. Fazer cadastro \n3. Sair \n"));
            switch(est_inc){
                case(1):
                    var n = 0;
                    while( n == 0){
                        
                        let user = prompt('Insira seu usuario: ');
                        if(this.funcionarios.hasOwnProperty(user) != true){
                            console.log('Usuário não encontrador, tente novamente')
                            break
                        }
                        let key = prompt('Insira sua senha: ');

                        if (key != this.funcionarios.user.senha){
                            console.log('Usuario ou senha incorretos, tente novamente!');
                        } else{
                            n = 1;
                            console.log(`Ola ${user}`);
                            let funcionario = this.funcionarios[user]    
                            let control = 1
                            while(control == 1){
                                let metodo = Number(prompt(
                                    ' =======MENU PRINCIPAL======= \nDigite uma das opções abaixo para prosseguir: \n1.Ver meus dados. \n2.Modificar meus Dados \n3.Ver lista de clientes. \n4.Ver lista de pets. \n5.Ver lista de consultas. \n6.Ver lista de funcionários. \n7.Marcar consulta. \n8.Mudar status de consulta. \n9.Remover cliente. \n10.Remover Pet. \n11.Cancelar consulta. \n12.Remover funcionario. \n13.Fazer Logout. \n'
                                    ));
                                switch(metodo){
                                    case(1):
                                        console.log(funcionario.informacoes());
                                        console.log('Voltando ao menu principal');
                                        
                                        break;

                                    case(2):
                                        let rep2 = 1
                                        while(rep2 != 0){
                                            let verf_2 = Number(prompt(' ====MENU DE ALTERACOES====  \n1.Alterar usuario. \n2.Alterar senha. \n0.Voltar ao menu principal. \n'))
                                            switch(verf_2){
                                                case(1):
                                                    var new_user2 = prompt('Digite seu novo uruario: ')
                                                    var  verf = 1
                                                    while(verf == 1){
                                                        if(this.funcionarios.hasOwnProperty(new_user2)){
                                                            new_user2 = prompt('Usuario ja existente, digite outro por favor: ')

                                                        }else{
                                                            verf = 0 
                                                        }
                                                    }
                                                    funcionario._usuario = new_user; 
                                                    funcionario.validacao();
                                                    delete  this.funcionarios[new_user];
                                                    funcionario = this.funcionarios[new_user];
                                                    console.log('Usuario alterado com sucesso.\nRetornando ao menu de alteracoes!')
                                                    break;

                                                    case(2):
                                                    var new_key2 = prompt('Insira sua nova senha: ');
                                                    funcionario._senha = new_key2;
                                                    console.log('Senda alterada com sucesso. \nRetornando ao menu de alteracoes!');
                                                    break;

                                                default:
                                                    rep2 = 0 
                                                    break;                                 
                                                        
                                            }
                                        }
                                    case(3):
                                        var clientes3 = this.clientes;
                                        var lista_clientes3 = Object.keys(clientes3);
                                        lista_clientes3.sort();
                                        console.log('===============');
                                        for(var i3 = 0; i3 < lista_clientes3.length; i3++ ){
                                            console.log(' ' +  (i3+1) + ' ' + '-' + ' ' + lista_clientes3[i3]);
                                            console.log('===============');

                                        }
                                        
                                        break;

                                    case(4):
                                        var pets4 = this.pets;
                                        var lista_pets4 = Object.keys(pets4);
                                        lista_pets4.sort();
                                        console.log('=======================');
                                        for(var i4 = 0; i4 < lista_pets4.length; i4++){
                                            var n4 = lista_pets4[i4];
                                            console.log( 'Pet:' + ' ' + n4 + ' ' + '-' + ' ' + 'Dono:' + ' ' + pets4[n4].dono.nome);
                                            console.log('=======================');
                                        }

                                        break;

                                    case(5):
                                        var consulta5 = this.consultas;
                                        var lista_datas5 = Object.keys(consulta5);
                                        lista_datas5.sort();;
                                        console.log('=================================')
                                        for(var i5 = 0; i5 < lista_datas5.length; i5++){
                                            for(var n5 = 0; n5  < consulta5[lista_datas5[i5]].length; n5++){
                                                var dict_cnst5 = consulta5[lista_datas5[i5]];
                                                console.log(dict_cnst5[n5]);
                                                
                                            }

                                        }
                                        console.log('=================================');

                                        break;

                                    case(6):
                                        var func6 = this.funcionarios;
                                        var lista_func6 = Object.keys(func6);
                                        lista_func6.sort();
                                        console.log('===============');
                                        for(var i6 = 0; i6 < lista_func6.length; i6++){
                                            console.log((i6+1) + '-' + lista_func6[i6]);
                                            console.log('===============');
                                        }
                                        
                                        break;

                                    case(7):
                                        var _pet7 = prompt('Digite o nome do pet que recebera a consulta: ')
                                        var verf_71 = Number(prompt('O pet ja possui cadastro? \n1.Sim \n2.Não \n'))
                                        var _dono7 = prompt('Digite o nome do dono do pet: ')
                                        var verf_72 = Number(prompt('O dono do pet ja possui cadastro? \n 1.Sim \n 2.Não \n'))
                                        var _func7 = prompt('Digite seu usuario: ')
                                        var _data7 = prompt('Digite a data da consulta: ')
                                        var _consulta7
                                        switch(verf_71){
                                            case(1):
                                                _pet7 = this.pets[_pet7];
                                                _dono7 = _pets[_dono7];
                                                        
                                                break;
                                            case(2): 
                                                switch(verf_72){
                                                    case(1):
                                                        _dono7 = this.clientes[_dono7];
                                                        _pet7 = new Animal(_pet7, _dono7);
                                                        _dono7.add_pet(_pet7);
                                                        break;
                                                            
                                                    case(2):
                                                        _dono7 = new Cliente(_dono7);
                                                        _dono7.validar();
                                                        _pet7 = new Animal(_pet7, _dono7);
                                                        _dono7.add_pet(_pet7);

                                                    break;
                                                }
                                                break;
                                        }
                                                
                                        if(this.consultas.hasOwnProperty(_data7)){
                                            for(var i7 = 0; i7 < this.consultas[_data7]; i7++){
                                                var prov_comp7 = this.consultas[_data7][i7];
                                                if(
                                                    (prov_comp7.data == _data7) && (prov_comp7.dono == _dono7) && (prov_comp7.pet == _pet7) && (prov_comp7.funcionario == _func7)
                                                ){
                                                    var verf_73 = Number(prompt('Consulta ja existnte, deseja remarcar: \n1.Sim \n2.Não \n'));
                                                    switch(verf_73){

                                                        case(1):
                                                            var new_data7 = prompt('Digite a nova data:');
                                                            prov_comp7._data = new_data7;
                                                            prov_comp7._status = 'Consulta adiada';
                                                            this.consultas[_data7].splice(i7,1);
                                                            prov_comp7.validacao();
                                                                    
                                                            break;

                                                        case(2):
                                                            console.log(`Segue os dados da sua consulta: \n${prov_comp7}`)



                                                    }
                                                } else {
                                                    _consulta7 = new Consultas(_pet7, _dono7, _func7, _data7);
                                                    _consulta7.validação();                           
                                                            
                                                } 
                                            }
                                        } else{
                                            _consulta7 = new Consultas(_pet7, _dono7, _func7, _data7);
                                            _consulta7.validação(); 

                                        }

                                        break;

                                    case(8):
                                        var _data8 = prompt('Insira a data da cosulta que deseja alterar: ');
                                        var _pet8 = prompt('Insira o nome do pet da consulta que deseja alterar: ');
                                        var _dono8 = prompt('Insira o nome do dono do pet da consulta que deseja alterar: ');
                                        var _func8 = prompt('Insira o nome do funcionario que marcou a consulta: ');
                                        let verf_84 = Number(prompt(
                                            'Qual o novo status da consulta? \n1.Cosnulta pendente \n2.Consulta adiada \n3.Consulta Cancelada \n4.Consulta realizada \n'
                                        ));
                                
                                        if(this.consultas.hasOwnProperty(_data8) == true){
                                            for(var i8 = 0; i8 < this.consultas[_data8]; i8++){
                                                let prov_comp8 = this.consultas[_data8][i8];
                                                console.log(prov_comp8)
                                                if(
                                                    (prov_comp8['data'] == _data8) && (prov_comp8['cliente'] == _dono8) && (prov_comp8['pet'] == _pet8) && (prov_comp8['funcionario'] == _func8)
                                                ){
                                                    switch(verf_84){
                                                        case(1):
                                                            prov_comp8['status'] = 'Consulta pentdente';
                                                            console.log('Status alterado com sucesso')
                                                            

                                                            break;
                                                        case(2):
                                                            prov_comp8['status'] = 'Consulta adiada';
                                                            console.log('Status alterado com ducesso')

                                                            break;
                                                        case(3):
                                                            prov_comp8['status'] = 'Consulta cancelada';
                                                            console.log('Status alterado com ducesso')

                                                            break;
                                                        case(4):
                                                            prov_comp8['status'] = 'Consulta realizada';
                                                            console.log('Status alterado com ducesso')
                                                            
                                                            break;
                                                                
                                                        }
                                                    } else{
                                                            console.log('Consulta não encontrada, tente novamente.')
                                                        }
                                                }
                                            }
                                            break;

                                    case(9):
                                        
                                        var _client9 = prompt('Digite o nome do cliente que deseja remover: ')
                                        if(this.clientes.hasOwnProperty(_client9)){
                                            var _client9_obj = this.clientes[_client9];
                                            var lista_pets9 = Object.keys(_client9_obj.pets);
                                            for(var i9 = 0; i9 < lista_pets9.length; i9++){
                                                delete this.pets[lista_pets9[i9]];
                                            }
                                            delete this.clientes[_client9];
                                            console.log('O cliente e seus pets foram removidos.')
                                            loop_9 = 3

                                        }else{
                                                console.log('Cliente não encontrado, tente Novamente.')    
                                            }
                                        


                                        break;
                                    case(10):
                                        let loop10 = 0
                                        while(loop10 < 3){
                                            var _pet10 = prompt('Digite o nome do pet que deseja remover: ')
                                            if(this.pets.hasOwnProperty(_pet10)){
                                                let _pet10_obj = this.pets[_pet10];
                                                delete _pet10_obj.dono.pets[_pet10_obj.nome];
                                                delete this.pets[_pet10];
                                                console.log('Pet removido')
                                                loop10 = 3;

                                            }else{
                                                if(loop10 == 2){console.log('Suas chance esgotaram. Voltando ao menu principal.')}else{
                                                    console.log('Pet não encontrado, tente novamente.');
                                                }
                                                loop10++;
                                            }
                                        }


                                        break;

                                    case(11):
                                        let loop11 = 0
                                        while(loop11 < 3){
                                            var _data11 = prompt('Insira a data da cosulta que deseja cancelar: ')
                                            var _pet11 = prompt('Insira o nome do pet da consulta que deseja cancelar: ')
                                            var _dono11 = prompt('Insira o nome do dono do pet da consulta que deseja cancelar: ')
                                            var _func11 = prompt('Insira o nome do funcionario que marcou a consulta: ')
                                            if(this.consultas.hasOwnProperty(_data11)){
                                                for(var i11 = 0; i11 < this.consultas[_data11]; i11++){
                                                    var prov_comp11 = this.consultas[_data11][i11];
                                                    if(
                                                        (prov_comp11['data'] == _data11) && (prov_comp11['client'] == _dono11) && (prov_comp11['pet'] == _pet11) && (prov_comp11['funcionario'] == _func11)
                                                    ){
                                                        prov_comp11['status'] = 'Consulta cancelada'
                                                        loop11 = 3 

                                                    }
                                                }
                                            }

                                        }


                                        break;
                                            
                                    case(12):
                                        let loop12 = 0
                                        while(loop12 < 3){
                                            var _func12 = prompt('Digite o usuário do funcionário que deseja remover: ');
                                            var lista_consulta12 = Object.keys(this.consultas);
                                            if(this.funcionarios.hasOwnProperty(_func12) == true){
                                                for(var i12 = 0; i12 < lista_consulta12.length; i12++){
                                                    for(var n12 = 0; n12 < (this.consultas[i12]).length; n12++){
                                                        var _consultas12 = this.consultas[i12][n12];
                                                        if( (_consultas12['funcionario'] == _func12) && ( _consultas11['status'] == 'Consulta pendente' || 'Constulta adiada') ){
                                                            console.log('O funcionario não pode ser removido pois há uma consulta em seu nome. Voltando ao menu principal!');
                                                            loop12 = 3;
                                                        } else{
                                                        delete this.funcionarios(_func12);
                                                        console.log("Funcionario removido. Voltando ao menu principal")
                                                        loop12 = 3;
                                                        }
                                                    }

                                                }
                                            }else{
                                                if(loop12 == 2){console.log('Suas chance esgotaram. Voltando ao menu principal.')} else{
                                                    console.log('Funcionário não encontrado, tente novamente.')
                                                }
                                                loop12++;
                                            }
                                        }
                                                


                                        break

                                    case(13):
                                        console.log('Fazendo Logout...')
                                        control = 0

                                        break;

                                    default:
                                        console.log('Opção invalida, faça login novamente')
                                        break;
                                }                                   
                            }
                        }
                    }

                    break;
                    
                case(2):
                    var new_user = prompt('Insira o nome de usuario que deseja usar: ');
                    var verf = 0 
                    while(verf < 3){ 
                        if(this.funcionarios.hasOwnProperty(new_user)){
                            console.log('Usuario ja existente, tente outro.')
                            if(verf == 2){
                                console.log('Excesso de tentativas. o programa sera reiniciado.')
                            }
                            verf++;
                        }else{
                            verf = 3
                        }
                    }

                        var new_key = prompt('Insira a senha que deseja usar: ');
                    let new_funcionario = new Funcionario(new_user, new_key);
                    new_funcionario.validacao();
                    console.log(`Ola ${new_funcionario.nome}`);
                    let funcionario = new_funcionario     
                    let control = 1
                    while(control == 1){
                        let metodo = Number(prompt(
                            ' =======MENU PRINCIPAL======= \nDigite uma das opções abaixo para prosseguir: \n1.Ver meus dados. \n2.Modificar meus Dados \n3.Ver lista de clientes. \n4.Ver lista de pets. \n5.Ver lista de consultas. \n6.Ver lista de funcionários. \n7.Marcar consulta. \n8.Mudar status de consulta. \n9.Remover cliente. \n10.Remover Pet. \n11.Cancelar consulta. \n12.Remover funcionario. \n13.Fazer Logout. \n'
                            ));
                        switch(metodo){
                            case(1):
                                console.log(funcionario.informacoes());
                                console.log('Voltando ao menu principal');
                                
                                break;

                            case(2):
                                let rep2 = 1
                                while(rep2 != 0){
                                    let verf_2 = Number(prompt(' ====MENU DE ALTERACOES====  \n1.Alterar usuario. \n2.Alterar senha. \n0.Voltar ao menu principal. \n'))
                                    switch(verf_2){
                                        case(1):
                                            var new_user2 = prompt('Digite seu novo uruario: ')
                                            var  verf = 1
                                            while(verf == 1){
                                                if(this.funcionarios.hasOwnProperty(new_user2)){
                                                    new_user2 = prompt('Usuario ja existente, digite outro por favor: ')

                                                }else{
                                                    verf = 0 
                                                }
                                            }
                                            funcionario._usuario = new_user; 
                                            funcionario.validacao();
                                            delete  this.funcionarios[new_user];
                                            funcionario = this.funcionarios[new_user];
                                            console.log('Usuario alterado com sucesso.\nRetornando ao menu de alteracoes!')
                                            break;

                                            case(2):
                                            var new_key2 = prompt('Insira sua nova senha: ');
                                            funcionario._senha = new_key2;
                                            console.log('Senda alterada com sucesso. \nRetornando ao menu de alteracoes!');
                                            break;

                                        default:
                                            rep2 = 0 
                                            break;                                 
                                                
                                    }
                                }
                            case(3):
                                var clientes3 = this.clientes;
                                var lista_clientes3 = Object.keys(clientes3);
                                lista_clientes3.sort();
                                console.log('===============');
                                for(var i3 = 0; i3 < lista_clientes3.length; i3++ ){
                                    console.log(' ' +  (i3+1) + ' ' + '-' + ' ' + lista_clientes3[i3]);
                                    console.log('===============');

                                }
                                
                                break;

                            case(4):
                                var pets4 = this.pets;
                                var lista_pets4 = Object.keys(pets4);
                                lista_pets4.sort();
                                console.log('=======================');
                                for(var i4 = 0; i4 < lista_pets4.length; i4++){
                                    var n4 = lista_pets4[i4];
                                    console.log( 'Pet:' + ' ' + n4 + ' ' + '-' + ' ' + 'Dono:' + ' ' + pets4[n4].dono.nome);
                                    console.log('=======================');
                                }

                                break;

                            case(5):
                                var consulta5 = this.consultas;
                                var lista_datas5 = Object.keys(consulta5);
                                lista_datas5.sort();;
                                console.log('=================================')
                                for(var i5 = 0; i5 < lista_datas5.length; i5++){
                                    for(var n5 = 0; n5  < consulta5[lista_datas5[i5]].length; n5++){
                                        var dict_cnst5 = consulta5[lista_datas5[i5]];
                                        console.log(dict_cnst5[n5]);
                                        
                                    }

                                }
                                console.log('=================================');

                                break;

                            case(6):
                                var func6 = this.funcionarios;
                                var lista_func6 = Object.keys(func6);
                                lista_func6.sort();
                                console.log('===============');
                                for(var i6 = 0; i6 < lista_func6.length; i6++){
                                    console.log((i6+1) + '-' + lista_func6[i6]);
                                    console.log('===============');
                                }
                                
                                break;

                            case(7):
                                var _pet7 = prompt('Digite o nome do pet que recebera a consulta: ')
                                var verf_71 = Number(prompt('O pet ja possui cadastro? \n1.Sim \n2.Não \n'))
                                var _dono7 = prompt('Digite o nome do dono do pet: ')
                                var verf_72 = Number(prompt('O dono do pet ja possui cadastro? \n 1.Sim \n 2.Não \n'))
                                var _func7 = prompt('Digite seu usuario: ')
                                var _data7 = prompt('Digite a data da consulta: ')
                                var _consulta7
                                switch(verf_71){
                                    case(1):
                                        _pet7 = this.pets[_pet7];
                                        _dono7 = _pets[_dono7];
                                                
                                        break;
                                    case(2): 
                                        switch(verf_72){
                                            case(1):
                                                _dono7 = this.clientes[_dono7];
                                                _pet7 = new Animal(_pet7, _dono7);
                                                _dono7.add_pet(_pet7);
                                                break;
                                                    
                                            case(2):
                                                _dono7 = new Cliente(_dono7);
                                                _dono7.validar();
                                                _pet7 = new Animal(_pet7, _dono7);
                                                _dono7.add_pet(_pet7);

                                            break;
                                        }
                                        break;
                                }
                                        
                                if(this.consultas.hasOwnProperty(_data7)){
                                    for(var i7 = 0; i7 < this.consultas[_data7]; i7++){
                                        var prov_comp7 = this.consultas[_data7][i7];
                                        if(
                                            (prov_comp7.data == _data7) && (prov_comp7.dono == _dono7) && (prov_comp7.pet == _pet7) && (prov_comp7.funcionario == _func7)
                                        ){
                                            var verf_73 = Number(prompt('Consulta ja existnte, deseja remarcar: \n1.Sim \n2.Não \n'));
                                            switch(verf_73){

                                                case(1):
                                                    var new_data7 = prompt('Digite a nova data:');
                                                    prov_comp7._data = new_data7;
                                                    prov_comp7._status = 'Consulta adiada';
                                                    this.consultas[_data7].splice(i7,1);
                                                    prov_comp7.validacao();
                                                            
                                                    break;

                                                case(2):
                                                    console.log(`Segue os dados da sua consulta: \n${prov_comp7}`)



                                            }
                                        } else {
                                            _consulta7 = new Consultas(_pet7, _dono7, _func7, _data7);
                                            _consulta7.validação();                           
                                                    
                                        } 
                                    }
                                } else{
                                    _consulta7 = new Consultas(_pet7, _dono7, _func7, _data7);
                                    _consulta7.validação(); 

                                }

                                break;

                            case(8):
                                var _data8 = prompt('Insira a data da cosulta que deseja alterar: ');
                                var _pet8 = prompt('Insira o nome do pet da consulta que deseja alterar: ');
                                var _dono8 = prompt('Insira o nome do dono do pet da consulta que deseja alterar: ');
                                var _func8 = prompt('Insira o nome do funcionario que marcou a consulta: ');
                                let verf_84 = Number(prompt(
                                    'Qual o novo status da consulta? \n1.Cosnulta pendente \n2.Consulta adiada \n3.Consulta Cancelada \n4.Consulta realizada \n'
                                ));
                        
                                if(this.consultas.hasOwnProperty(_data8) == true){
                                    for(var i8 = 0; i8 < this.consultas[_data8]; i8++){
                                        let prov_comp8 = this.consultas[_data8][i8];
                                        console.log(prov_comp8)
                                        if(
                                            (prov_comp8['data'] == _data8) && (prov_comp8['cliente'] == _dono8) && (prov_comp8['pet'] == _pet8) && (prov_comp8['funcionario'] == _func8)
                                        ){
                                            switch(verf_84){
                                                case(1):
                                                    prov_comp8['status'] = 'Consulta pentdente';
                                                    console.log('Status alterado com sucesso')
                                                    

                                                    break;
                                                case(2):
                                                    prov_comp8['status'] = 'Consulta adiada';
                                                    console.log('Status alterado com ducesso')

                                                    break;
                                                case(3):
                                                    prov_comp8['status'] = 'Consulta cancelada';
                                                    console.log('Status alterado com ducesso')

                                                    break;
                                                case(4):
                                                    prov_comp8['status'] = 'Consulta realizada';
                                                    console.log('Status alterado com ducesso')
                                                    
                                                    break;
                                                        
                                                }
                                            } else{
                                                    console.log('Consulta não encontrada, tente novamente.')
                                                }
                                        }
                                    }
                                    break;

                            case(9):
                                
                                var _client9 = prompt('Digite o nome do cliente que deseja remover: ')
                                if(this.clientes.hasOwnProperty(_client9)){
                                    var _client9_obj = this.clientes[_client9];
                                    var lista_pets9 = Object.keys(_client9_obj.pets);
                                    for(var i9 = 0; i9 < lista_pets9.length; i9++){
                                        delete this.pets[lista_pets9[i9]];
                                    }
                                    delete this.clientes[_client9];
                                    console.log('O cliente e seus pets foram removidos.')
                                    loop_9 = 3

                                }else{
                                        console.log('Cliente não encontrado, tente Novamente.')    
                                    }
                                


                                break;
                            case(10):
                                let loop10 = 0
                                while(loop10 < 3){
                                    var _pet10 = prompt('Digite o nome do pet que deseja remover: ')
                                    if(this.pets.hasOwnProperty(_pet10)){
                                        let _pet10_obj = this.pets[_pet10];
                                        delete _pet10_obj.dono.pets[_pet10_obj.nome];
                                        delete this.pets[_pet10];
                                        console.log('Pet removido')
                                        loop10 = 3;

                                    }else{
                                        if(loop10 == 2){console.log('Suas chance esgotaram. Voltando ao menu principal.')}else{
                                            console.log('Pet não encontrado, tente novamente.');
                                        }
                                        loop10++;
                                    }
                                }


                                break;

                            case(11):
                                let loop11 = 0
                                while(loop11 < 3){
                                    var _data11 = prompt('Insira a data da cosulta que deseja cancelar: ')
                                    var _pet11 = prompt('Insira o nome do pet da consulta que deseja cancelar: ')
                                    var _dono11 = prompt('Insira o nome do dono do pet da consulta que deseja cancelar: ')
                                    var _func11 = prompt('Insira o nome do funcionario que marcou a consulta: ')
                                    if(this.consultas.hasOwnProperty(_data11)){
                                        for(var i11 = 0; i11 < this.consultas[_data11]; i11++){
                                            var prov_comp11 = this.consultas[_data11][i11];
                                            if(
                                                (prov_comp11['data'] == _data11) && (prov_comp11['client'] == _dono11) && (prov_comp11['pet'] == _pet11) && (prov_comp11['funcionario'] == _func11)
                                            ){
                                                prov_comp11['status'] = 'Consulta cancelada'
                                                loop11 = 3 

                                            }
                                        }
                                    }

                                }


                                break;
                                    
                            case(12):
                                let loop12 = 0
                                while(loop12 < 3){
                                    var _func12 = prompt('Digite o usuário do funcionário que deseja remover: ');
                                    var lista_consulta12 = Object.keys(this.consultas);
                                    if(this.funcionarios.hasOwnProperty(_func12) == true){
                                        for(var i12 = 0; i12 < lista_consulta12.length; i12++){
                                            for(var n12 = 0; n12 < (this.consultas[i12]).length; n12++){
                                                var _consultas12 = this.consultas[i12][n12];
                                                if( (_consultas12['funcionario'] == _func12) && ( _consultas11['status'] == 'Consulta pendente' || 'Constulta adiada') ){
                                                    console.log('O funcionario não pode ser removido pois há uma consulta em seu nome. Voltando ao menu principal!');
                                                    loop12 = 3;
                                                } else{
                                                delete this.funcionarios(_func12);
                                                console.log("Funcionario removido. Voltando ao menu principal")
                                                loop12 = 3;
                                                }
                                            }

                                        }
                                    }else{
                                        if(loop12 == 2){console.log('Suas chance esgotaram. Voltando ao menu principal.')} else{
                                            console.log('Funcionário não encontrado, tente novamente.')
                                        }
                                        loop12++;
                                    }
                                }
                                        


                                break

                            case(13):
                                console.log('Fazendo Logout...')
                                control = 0

                                break;

                            default:
                                console.log('Opção invalida, faça login novamente')

                            }

                    }
   
                    break;

                case(3):
                    console.log('Ok, o programa sera encerrado!');
                    on = 0;

                    break;

                default:
                    console.log('Error. reiniciando o sistema...');

                    break;
            

            }
        }
    }   

}
class Cliente{

    #Sistema = loja

    constructor(Nome){
        this.id = (Math.floor(Math.random()*(2000 - 1000 + 1) + 1000)).toString();
        this.nome = Nome;
        this.pets = {}; 
    }

    add_pet(pet = Animal){
        this.pets[pet.nome] = pet
        this.#Sistema.pets[pet.nome] = pet 
    }

    NumeroDePets(){
        return (Object.keys(this.pet).length);

    }

    get fidelidade(){
        let fid = 0
        for(i in this.pets){
            fid += i.consultas.realizadas
        }
        if(fid <= 4){return true} else{ return false}
    }

    validar(){
        this.#Sistema.clientes[this.nome] = this

    }



}
class Funcionario {
    #Sistema = loja
    constructor(UserName, Key){
        this.id = (Math.floor(Math.random()*(9999 - 9000 + 1) + 9000)).toString();
        this.usuario = UserName;
        this.senha = Key;
    }

    set _usuario(NewUser){
        this.usuario = NewUser; 

    }

    set _senha(NewKey){
        this.senha = NewKey;
    } 

    get _senha(){
        return this.senha;
    }

    validacao(){
        this.#Sistema.funcionarios[this.usuario] = this

    }

    informacoes(){
        console.log(`\nUsuário: ${this.usuario} \nID: ${this.id}`);
    }

}
class Animal{
    #Sistema = loja
    constructor(nome, dono = Cliente){
        this.id = (dono.id + "." + ((Math.floor(Math.random()*99))).toString());
        this.dono = dono
        this.nome = nome; 
        this.consultas = {
            totais: [],
            realizadas: []
        }
        

    }
    
    atualização_geral(consulta){
        this.consultas['realizadas'].unshift(consulta)
    }

    atualização_parcial(consulta){
        this.consultas['totais'].unshift(consulta)
    }

}
class Consultas{

    #Sistema = loja

    constructor(pet = Animal, cliente = Cliente, funcionario = Funcionario, data){
        this.id = (Math.floor(Math.random()*1000)).toString();
        this.pet = pet;
        this.cliente = cliente; 
        this.funcionario = funcionario;
        this.status = "Consulta pendente";
        this.data = data;
    }

    set _status(NewStatus){
        this.status = NewStatus;
        for (let i = 0; i < this.#Sistema.consulta[this.data]; i++){
            if (this.#Sistema.consulta[this.data][id]== this.id){
                this.#Sistema.consulta[this.data][i][Status] = NewStatus 
            }
        }
        if (NewStatus == "Consultarealizada"){
            this.pet.atualizacao_geral(this);

        }
    }

    set _data(NewData){
        this.data = NewData;

    }

    validação(){
        var __consulta = {
            'id' : this.id,
            'pet' : this.pet.nome,
            'cliente' : this.cliente.nome,
            'funcionario' : this.funcionario,
            'data' : this.data,
            'status': this.status
            };

        (this.pet).atualização_parcial(__consulta)
        if(this.#Sistema.consultas[this.data] == undefined){
            this.#Sistema.consultas[this.data] = [__consulta]
        } else{
            this.#Sistema.consultas[this.data].push(Consulta)
        }


    }
}


const loja = new Sistema();

loja.Inicio_app()


