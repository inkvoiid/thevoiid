function VOIIDPack() {
  let voiidpackReleases = require("../../data/voiidpack-releases.json");
  return (
    <main>
      <div className="page-title underline">
        <h1>VOIIDPack</h1>
      </div>
      <div className="container">
        <h2>About VOIIDPack</h2>
        <p>
          VOIIDPack is a Minecraft resource pack that's been in development
          since 2018. It's 16x but has a softer look than vanilla Minecraft.
        </p>
        <p>
          It's current state is a half finshed pack with parts that I would like
          to rework some day.
        </p>

        <h2>VOIIDPack Releases</h2>
        <table>
          <tr>
            <th>VOIIDPack Version</th>
            <th>Minecraft Version</th>
            <th>Release Date</th>
            <th>Download Link</th>
          </tr>
          {voiidpackReleases.data.map((data, idx) => (
            <tr>
              <td>{data.version}</td>
              <td>Minecraft {data.mcversion}</td>
              <td>{data.releasedate}</td>
              {data.url === "" ? (
                <td>Unavailable</td>
              ) : (
                <td>
                  <a href={data.url} target="_blank" rel="noreferrer">
                    <i class="fas fa-download"></i> Download
                  </a>
                </td>
              )}
            </tr>
          ))}
        </table>
      </div>
    </main>
  );
}

export default VOIIDPack;
