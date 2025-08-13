import React, { useMemo, useState } from 'react';

function SubCompoCreate({ config }) {
    return (
        <div>오늘의 테마는  : {config.theme}</div>
    );
}

const ExMemo4 = () => {
    const [theme, setTheme] = useState("light");

    const config = useMemo(() => ({ theme }), [theme])

    return (
        <div>
            <h3>ExMemo4</h3>
            <SubCompoCreate config={config} />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> 테마 변경 </button>
        </div>
    );
};

export default ExMemo4;