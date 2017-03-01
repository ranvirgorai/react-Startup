import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import './style.css';
class SideBar extends Component {
	render() {
		return (
			<div>
				<div className="row" >
					<div className="col-xs-1">
						<ul id="sidebar" className="nav nav-stacked affix">
							<li>
                <a href="#">
                <Glyphicon glyph="star" /><p></p>
								 Dashboard</a>
							</li>
							<li><a href="#">
                <Glyphicon glyph="star" /><p></p>
								 Home </a>
							</li>
							<li>
                <a href="#">
                <Glyphicon glyph="star" /><p></p>
								 MIS</a>
							</li>
							<li>
                <a href="#">
                <Glyphicon glyph="star" /><p></p>
								 Item 1</a>
							</li>
							<li>
                <a href="#">
                <Glyphicon glyph="star" /><p></p>
								 Item 1</a>
							</li>
							<li>
                <a href="#">
                <Glyphicon glyph="star" /><p></p>
								 Item 1</a>
							</li>

						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default SideBar;
