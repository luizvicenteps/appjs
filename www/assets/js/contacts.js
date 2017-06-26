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
     
             var listaContatos = [new _contato("Jose Carlos", "Macoratti", "99850-9652", "macoratti.jose@gmail.com"),
                                           new _contato("Janice", "Lima", "8850-0011", "lima.Jjanice@ymail.com"),
                                           new _contato("Jefferson", "Bueno", "7850-9080", "bueno.jefferson@hotmail.com")];

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
    
