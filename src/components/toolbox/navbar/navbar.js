import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-light bg-secondary d-flex justify-content-between py-3 px-5">
                <a class="navbar-brand text-white" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link text-white" href="#">Home</a>
                        <a class="nav-item nav-link text-white" href="#">Features</a>
                        <a class="nav-item nav-link text-white" href="#">Pricing</a>
                        <a class="nav-item nav-link text-white" href="#">Disabled</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
