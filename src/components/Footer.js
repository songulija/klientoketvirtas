import React from 'react'

function Footer(props) {
    return (
        <>
        {props.record == "light"?
        <footer class="bg-dark text-white">
                <div class="container-fluid py-2">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google"></i>
                </div>
                <p class="py-2">
                    Copyright &copy Lukas Songulija
                </p>
            </footer>:
            <footer class="bg-light text-black">
                <div class="container-fluid py-2">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google"></i>
                </div>
                <p class="py-2">
                    Copyright &copy Lukas Songulija
                </p>
            </footer>

        }
        
        </>
    )
}

export default Footer
