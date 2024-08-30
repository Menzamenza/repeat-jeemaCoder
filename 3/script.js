class JeemaCoder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputPrenom: "",
            inputNom: "",
            inputEmail: "",
            inputTel: "",
            students: []
        }
    }


    AjouterEtudiants = (e) => {
        e.preventDefault()
        const nouvEtudiant = {
            prenom: this.state.inputPrenom,
            nom: this.state.inputNom,
            email: this.state.inputEmail,
            tel: this.state.inputTel
        }

        this.setState({
            students: [...this.state.students, nouvEtudiant],
            inputPrenom: "",
            inputNom: "",
            inputEmail: "",
            inputTel: ""
        })
    }

    render() {
        return (
            <div>
                <h1>JeemaCoder</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Prénom" value={this.state.inputPrenom}
                        onChange={(e) => {
                            this.setState({
                                inputPrenom: e.target.value
                            })
                        }} name="prenom" />
                    <input type="text" placeholder="Nom" value={this.state.inputNom}
                        onChange={(e) => {
                            this.setState({
                                inputNom: e.target.value
                            })
                        }} name="nom" />
                    <input type="email" placeholder="Email" value={this.state.inputEmail}
                        onChange={(e) => {
                            this.setState({
                                inputEmail: e.target.value
                            })
                        }} name="email" />
                    <input type="tel" placeholder="Téléphone" value={this.state.inputTel}
                        onChange={(e) => {
                            this.setState({
                                inputTel: e.target.value
                            })
                        }} name="tel" />
                    <button type="submit" class onClick={this.AjouterEtudiants}>Ajouter</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.prenom}</td>
                                <td>{student.nom}</td>
                                <td>{student.email}</td>
                                <td>{student.tel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<JeemaCoder />, document.getElementById('root'));