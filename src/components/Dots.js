const Dot = ({ num, scrollIndex }) => {
    return (
        <div
            style={{
                width: 10,
                height: 10,
                border: "1px solid white",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "white" : "transparent",
                transitionDuration: 1000,
                transition: "background-color 0.5s",
            }}
        ></div>
    );
};

const Dots = ({ scrollIndex }) => {
    return (
        <div style={{ position: "fixed", top: "50%", right: 25 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 20,
                    height: 100,
                }}
            >
                <Dot num={1} scrollIndex={scrollIndex}></Dot>
                <Dot num={2} scrollIndex={scrollIndex}></Dot>
                <Dot num={3} scrollIndex={scrollIndex}></Dot>
                <Dot num={4} scrollIndex={scrollIndex}></Dot>
            </div>
        </div>
    );
};

export default Dots;