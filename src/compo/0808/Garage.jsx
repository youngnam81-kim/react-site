import Car from "./Car"
import './css/garage.css'

function Garage(props) {
    return (
        <>
            <h2>차고</h2>
            <div className="carContainer">
                <Car co="르노" name="클리오" imgC="https://i.namu.wiki/i/O7Xpi1f21qX9hnPoTYxNLDb5QiqYS7jBk5BjlLxhXQO8AsxYtwSAFW5YJ_Is_WzSltz_oN5WIjixvLB_hFDwRWGkUHpBQmTlXTEdUdadsC4Ys2gNZ8N3LDKi4Flo8ERxu8bV1XoaqvlDJHr8boNyqg.webp"></Car>
                <Car co="르노" name="XM3" imgC="https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20250429_57%2F1745906139675Uo6rM_JPEG%2F681069db784b35f635cb48eb.jpg&type=o&size=472x472&ttype=input&autoRotate=true"></Car>
                <Car co="르노" name="SM5" imgC="https://search.pstatic.net/common?type=f&size=210x210&quality=75&direct=true&ttype=input&src=https%3A%2F%2Fimgauto-phinf.pstatic.net%2F20170302_77%2Fauto_1488456681463GtlEh_JPEG%2F20170302211106_b6uxUIZZ.jpg"></Car>
            </div>
            <div className="carContainer">
                <Car co="기아" name="카니발" imgC="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fimgauto-phinf.pstatic.net%2F20241014_232%2Fauto_1728875380036RHGVO_PNG%2F20241014120205_Xg6T6d75.png"></Car>
                <Car co="기아" name="레이" imgC="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MTRfMTgw%2FMDAxNzQ3MjA3NDQxMTQ5.f8LCEWF1vidoMmOMYnk5-9So8BGtITmPYXkO7Vz-2AMg.lhyKdr26mVAvgJGrRwKwCGFIgW1pI4H6xfoWaLAxgTcg.JPEG%2FKakaoTalk_20250502_145501346_01.jpg&type=a340"></Car>
            </div>
            <div className="carContainer">
                <Car co="현대" name="소나타" imgC="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTlfMjYg%2FMDAxNjg0NDUzMTE3Mjk1._n2LvyXWyGU-jfcn6z3nSBdAgFfXAKAA289OqOSL9GQg._nYeNkRbl82b8YELZvcKA0r7ExNW1ergstcE241Pr4Mg.JPEG.ear1114%2FKakaoTalk_20230519_080339603_01.jpg&type=a340"></Car>
                <Car co="현대" name="그렌져" imgC="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjdfNSAg%2FMDAxNjExNzM4MzI5OTcy.tMi7bSFA_V0d1YqVNjALX_RUbGObbyzy_Olz9Quio6Mg.PfcrGVonDvj1XGPd23obigQcCFs5CkRFiH_l6C-PDksg.JPEG.rnr5030%2F%25BA%25CF%25B4%25EB%25B1%25B8%25BD%25A6%25BA%25B8%25B7%25B96.jpg&type=a340"></Car>
                <Car co="현대" name="제네시스" imgC="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F009%2F2023%2F12%2F15%2F0005230705_003_20231215172004311.jpg&type=a340"></Car>
                <Car co="현대" name="아반떼" imgC="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5244%2F2020%2F03%2F25%2F0000291188_001_20200325092215705.jpg&type=a340"></Car>
            </div>
        </>
    )
}
export default Garage