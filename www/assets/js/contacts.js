        function _contato(Nome, Sobrenome, Contato, Email) {
                                    this.Nome = ko.observable(Nome);
                                    this.Sobrenome = ko.observable(Sobrenome);
                                    /*this.Nome = ko.computed(function () {
                                    return this.Nome() + ' ' + this.Sobrenome();
                                    }, this);*/
            this.Contato = ko.observable(Contato);
            this.Email = ko.observable(Email);
            this.isEditing = ko.observable(false);
            this.editarContato = function (event) {
                this.isEditing(true);
            }

            this.atualizarContato = function (task) {
                this.isEditing(false);
            }
        }

        var viewModel = function () {
            self = this;
     
             var listaContatos = [new _contato("Luiz Vicente", "Prestes", "92 99454-7306", "luizvicenteps@gmail.com"),
                                           new _contato("Brando", "Mota", "92 98405-9787", "mota.brando@ymail.com"),
                                           new _contato("Bruno", "Gomes", "92 98405-9787", "gomes.brunoo@yahoo.com"),
                                           new _contato("Caio", "Vitor", "92 99202-2926", "vitor.caio@hotmail.com")];

            self.Nome = ko.observable();
            self.Sobrenome = ko.observable();
            self.Contato = ko.observable();
            self.Email = ko.observable();
            self.Contatos = ko.observableArray(listaContatos);

            //remover contato
            self.removerContato = function (_contato) { self.Contatos.remove(_contato) }

            //incluir contato
            self.adicionarContato = function () {
                var con = new _contato(self.Nome(), self.Sobrenome(), self.Contato(), self.Email())
                self.Contatos.push(con);
                self.Nome("");
                self.Sobrenome("");
                self.Contato("");
                self.Email("");
            };
        }

        ko.applyBindings(new viewModel());
    
