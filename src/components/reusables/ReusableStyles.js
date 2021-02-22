import React from 'react'

const ReusableStyles = () => {
    return (
        <style jsx="true">
            {
                ` @import url(  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Source+Sans+Pro:wght@400;700&display=swap');
                :root {
                    --default_blue: #2f5abb;
                    --header_font: 'Nunito', sans-serif;
                    --text_font: 'Source Sans Pro', sans-serif;
                }

                h1,
                h2,
                h3,
                h4,
                h5 {
                    font-family: var(--header_font);
                }

                a,
                button,
                p,
                span {
                    font-family: var(--text_font);
                }

                a:hover{
                    text-decoration: none;
                }

                .text_is_blue {
                    color: var(--default_blue);
                }

                .default_btn {
                    background: var(--default_blue);
                    color: #fff;
                    border: none;
                    padding: 0.5em 3em;
                    border-radius: 20px;
                }

                
                .btnOnHover:hover {
                    background: var(--default_blue);
                    color: #fff;
                    border: none;
                    padding: 0.6em 2em;
                    border-radius: 50px;
                    transition: all 0.25s ease;
                }

                .align_only {
                    display: flex;
                    align-items: center;
                }

                .center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .section__height--mid{
                    min-height: 60vh;
                }

                .section__text {
                    font-size: 16px;
                }

                .section__text--big{
                    font-size: 18px;
                }

                .section__head {
                    font-size: 40px;
                }

                .section__head--mid{
                    font-size: 25px;
                }

                .v_align {
                    text-align: center;
                }

                .pointer {
                    cursor: pointer;
                }
                 `
            }</style>
    )
}

export default ReusableStyles;