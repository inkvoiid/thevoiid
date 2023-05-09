import Panorama from "./Panorama";
import DamonBase from "../../media/images/minecraftworlds/panoramas/damonskybase.jpg";

/**
 * Render a component to display server details.
 *
 * @param {Object} props - The props object containing the server details.
 * @param {Object} props.server - An object representing the server details including the name, date created, date ended, owner, status, and players.
 * @returns {JSX.Element} A JSX element that displays the server details.
 *
 * @example
 * const serverDetails = {
 *     name: 'My Server',
 *     datecreated: '2022-01-01',
 *     dateended: '2022-01-31',
 *     owner: 'John',
 *     status: 'Active',
 *     players: ['Player1', 'Player2', 'Player3']
 * };
 *
 * <ServerEntry server={serverDetails} />
 */
function ServerEntry({server}){
    return(
        <article className="container mcworldcontainer">
				<section>
					<Panorama src={DamonBase} />
				</section>
				<section style={{paddingInline:"2%"}}>
					<h2>{server.name}</h2>
                    <p className="subheader"><i>{((server.datecreated !== undefined) && server.datecreated) || "Unknown"} - {((server.dateended !== undefined) && server.dateended) || "Unknown"}</i></p>
                        <div className="left">
                        <p>Server Owner: {((server.owner !== undefined) && <span className="playertag">{server.owner}</span>) || "Unknown"}</p>
                        <p>Status: {((server.status !== undefined) && server.status) || "Unknown"}</p>
                        
                            
                        <h3 style={{textAlign:"left"}}>Players 
                        {((server.players !== undefined) && 
                         " (" + server.players.length + ")")||""}</h3>
                        {((server.players !== undefined) && 
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {server.players.map(player => (<span className="playertag">{player}</span>))}
                                </div>
                            )|| <p style={{marginBlock:0}}>Unknown</p>}
                    </div>
				</section>
			</article>
    );
}

export default ServerEntry;