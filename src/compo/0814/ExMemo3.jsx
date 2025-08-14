import React, { useMemo, useState } from 'react';

const users = [
    { id: 3, name: "Kim", active: true },
    { id: 2, name: "Lee", active: false },
    { id: 1, name: "Park", active: true }
];

const ExMemo3 = () => {
    const [showActive, setShowActive] = useState(true);
    const filteredUser = useMemo(() => {
        console.log(`사용자 필터 실행 ${showActive}`);

        return users.filter((user) => (user.active === showActive));

    }, [showActive]);

    return (
        <div>
            <h3>ExMemo3</h3>
            <button onClick={() => { setShowActive((a) => !a) }}>
                {showActive ? "비활성" : "활성"}사용자보기
            </button>
            <ol>
                {
                    filteredUser.map((u) => (
                        <li key={u.id}>{u.name} 고객님 ({showActive ? "활성" : "비활성"})</li>
                    ))
                }
            </ol>
        </div>
    );
};

export default ExMemo3;