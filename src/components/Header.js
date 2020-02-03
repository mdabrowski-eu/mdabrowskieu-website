import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Michał Dąbrowski</h1>
                <p>Hello, I am a professional developer, sworn software craftsman as well as amateur musician and sound engineer.</p>
                <p>I welcome you to review my accomplishments and invite you to work with me in the future.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skillset')}}>Skillset</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('music')}}>Music and dubbing</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('articles')}}>Articles</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
