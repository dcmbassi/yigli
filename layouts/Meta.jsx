import Head from "next/head"

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>Yigli {title && `| ${title}`}</title>
            <meta name="description" content={description} />
            {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
        </Head>
    )
}

export default Meta