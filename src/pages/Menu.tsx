import "./Menu.less";
import { useEffect, useRef, useState } from "react"
import { gameManager } from "../core/GameManager";

export function Menu() {
  const [login, setLogin] = useState(false);
  const [menu12, setMenu12] = useState(false);
  const [doorCreate, setDoorCreate] = useState(false);
  const [openDoor, setOpenDoor] = useState(false);

  useEffect(() => {
    gameManager.on("doorCreate", () => {
      setDoorCreate(true)
    }, true, true);
    gameManager.on("openDoor", () => {
      setOpenDoor(true)
      setMenu12(false)
    }, true, true);
    setTimeout(() => {
      setLogin(true);
      setMenu12(true)
    }, 500);
  }, [])

  return (
    <div className="menu-container">
      <div className="menu-12" style={{ opacity: menu12 ? "0.9" : "0" }}></div>
      <div className="menu-login" style={{ opacity: login ? "1" : "0" }}>
        <div className="background"></div>
        <div className="menu-description">
          <div className="description">
            <p>免责声明：</p>
            <p>本网站是一个纯粹的技术示例，旨在展示和分享我们的技术能力。网站的设计和内容受到《原神》的启发，并尽可能地复制了《原神》的登录界面。我们对此表示敬意，并强调这个项目不是官方的《原神》产品，也没有与《原神》或其母公司miHoYo有任何关联。</p>
            <p>我们没有，也无意从这个项目中获得任何经济利益。这个网站的所有内容仅供学习和研究目的，以便让更多的人了解和熟悉webgl开发技术。</p>
            <p>如果miHoYo或任何有关方面认为这个项目侵犯了他们的权益，请联系我们，我们会立即采取行动。</p>
          </div>
        </div>
        <button className="ClickMe" onClick={login ? () => {
          gameManager.emit("button-start-click");
          gameManager.emit("start")
          setLogin(false)
        } : () => { }}></button>
        <button className="ClickMe" style={{
          bottom: "16%",
          backgroundImage: `url("/Genshin/jump.png")`
        }} onClick={login ? () => {
          window.open('https://github.com/gamemcu/www-genshin');
        } : () => { }}></button>
      </div>
      {doorCreate && (
        <div className="menu-doorCreate-content" style={{ opacity: openDoor ? "0" : "1" }}>
          <div className="menu-doorCreate" >
            <div className="entry" />
          </div>
        </div>
      )}

    </div>
  )
}