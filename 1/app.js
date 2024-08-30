class JeemaCoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenomInput: '',
            nomInput: '',
            emailInput: '',
            telInput: '',
            etudiants:[]
        };
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
                                onChange={(e)=>{
                                    this.setState({
                                        prenomInput:e.target.value
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
                                onChange={(e)=>{
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
                                onChange={(e)=>{
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
                                onChange={(e)=>{
                                    this.setState({
                                        telInput:e.target.value
                                    })
                                }}
                            />
                        </label>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center">

                        <button type="submit" className="btn btn-dark mt-2 "
                          
                        >Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }
}
ReactDOM.render(<JeemaCoder />, document.getElementById('root'))