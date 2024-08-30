class JeemaCoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenomInput: '',
            nomInput: '',
            emailInput: '',
            telInput: '',
            etudiants: []
        };
    }

    //    methode ajout etudiants
    addStudent = (e) => {
        e.preventDefault()

        const newStudent = {
            prenom: this.state.prenomInput,
            nom: this.state.nomInput,
            mail: this.state.emailInput,
            tel: this.state.telInput
        }
        this.setState({
            etudiants: [...this.state.etudiants, newStudent],
            prenomInput: "",
            nomInput: "",
            emailInput: "",
            telInput: ""
        })
    }

    render() {
        return (

            <div className="container mt-5">
                <h1 className="text-center">JeemaCoder</h1>
                <form>
                    <div className="d-flex justify-content-center align-items-center gap-2">

                        <label>
                            Prénom:
                            <input type="text"
                                className="form-control"
                                value={this.state.prenomInput}
                                onChange={(e) => {
                                    this.setState({
                                        prenomInput: e.target.value
                                    })
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            Nom:
                            <input type="text"
                                className="form-control"
                                value={this.state.nomInput}
                                onChange={(e) => {
                                    this.setState({
                                        nomInput: e.target.value
                                    })
                                }}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center align-items-center gap-2">

                        <label>
                            Email:
                            <input type="email"
                                className="form-control"
                                value={this.state.emailInput}
                                onChange={(e) => {
                                    this.setState({
                                        emailInput: e.target.value
                                    })
                                }}
                            />
                        </label>
                        <br />
                        <label>
                            Téléphone:
                            <input type="tel"
                                className="form-control"
                                value={this.state.telInput}
                                onChange={(e) => {
                                    this.setState({
                                        telInput: e.target.value
                                    })
                                }}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">

                        <button type="submit" className="btn btn-dark mt-2 "
                            onClick={this.addStudent}
                        >Envoyer</button>
                    </div>
                </form>
                <div className="mt-3">
                    <table className="table mt-3">


                        <thead>
                            <tr>

                                <th scope="col">Prenom</th>
                                <th scope="col">Nom</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Telephone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.etudiants.map((etudiant, index) => (
                                <tr key={index} className="my-3">
                                    <td>{etudiant.prenom}</td>
                                    <td>{etudiant.nom}</td>
                                    <td>{etudiant.mail}</td>
                                    <td>{etudiant.tel}</td>
                                    
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<JeemaCoder />, document.getElementById('root'))