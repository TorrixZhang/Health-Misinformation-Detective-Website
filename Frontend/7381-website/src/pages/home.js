import Header from "./navigation";

const titleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '6px',

    position: 'absolute',
    width: '670px',
    height: '495px',
    left: '122px',
    top: '184px'
}

const h1Style = {
    fontFamily: "'DM Sans', sans-serif",
    fontStyle: 'normal',
    fontSize: '100px',
    fontWeight: '500',
    lineHeight: '110%',
    letterSpacing: '-0.03em',
    color: '#1b262c'
}





export default function Home() {
    return (
        <div>
            <Header />
            <div>
                <div id="title" style={titleStyle}>
                    <h1 style={h1Style}>Misinformation Detective</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.</p>
                    <h2 id="button">Explore</h2>
                </div>
            </div>

        </div>
    )
}

let backgroundStyle = document.getElementsByTagName("body");
backgroundStyle[0].style["background-color"] = '#F3F9FB';

