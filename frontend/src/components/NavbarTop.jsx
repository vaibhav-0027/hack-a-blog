import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

function NavbarTop() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<Navbar style={{backgroundColor:"#8572f0"}} dark expand="md">
				<Link to="/">
					<NavbarBrand>ZINTA</NavbarBrand>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<Link to="/" style={{ textDecoration: "none" }}>
							<NavItem>
								<NavLink><strong>Home</strong></NavLink>
							</NavItem>
						</Link>

						<Link to="/feedback" style={{ textDecoration: "none" }}>
							<NavItem>
								<NavLink><strong>Feedback</strong></NavLink>
							</NavItem>
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavbarTop;
