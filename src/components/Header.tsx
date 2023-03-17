import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.scss"
// export class Header extends React.Component {
//     constructor(props: Object) {
//         super(props)

//         this.navigate = this.navigate.bind(this)
//     }
//     state = {
//         route: "",
//         active: ""
//     }
//     navigate(e: string) {

//         this.setState({
//             active: e
//         })
//     }

//     makeLinkActive() {

//     }
//     render(): React.ReactNode {
//         return (
//             <header className="header">

//                 <Link to={"/"} style={{ textDecoration: 'none', color: "inherit" }}>   <h2 className={this.state.active == "" ? "link-active" : ""} onClick={(e) => this.navigate("")}>Main </h2></Link>


//                 <Link to={"/about"} style={{ textDecoration: 'none' }}> <h2 className={this.state.active == "about" ? "link-active" : ""} onClick={(e) => this.navigate("about")}>About</h2></Link>


//             </header>
//         )
//     }
// }

interface IHeaderState { route: string }
export class Header extends React.Component<{}, { route: string }> {

    constructor(props: Object) {
        super(props)


    }
    state = {
        route: "",

    }

    componentDidMount(): void {
        const route = window.location.href.split('/')[3]
        //     this.setState((state) => {
        //         (state.route : ""  )
        // })
        this.setState((prev) => ({
            route: route
        }))


    }

    render(): React.ReactNode {
        return (
            <header className="header">

                <Link className="link-reset" to={"/"}>   <h2 className={this.state.route == "" ? "link-active" : ""}>Main </h2></Link>
                <Link className="link-reset" to={"/about"} > <h2 className={this.state.route == "about" ? "link-active" : ""} >About</h2></Link>


            </header>
        )
    }
}