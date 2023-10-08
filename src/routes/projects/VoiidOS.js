function VoiidOS() {
  return (
    <main>
      <div className="page-title underline">
        <h1>VoiidOS</h1>
      </div>
      <div className="container">
        <h2>About VoiidOS</h2>
        <p>
          VoiidOS is a simple "operating system" that I made in 2018. It's a hub
          that connects to a few different programs that I made in python during
          high school.
        </p>
        <p>
          The original python version I made in high school is immortalised by
          this trinket that runs a version with a few bugs.
        </p>

        <iframe
          title="The Trinklet"
          src="https://trinket.io/embed/python3/c57dc49098?outputOnly=true"
          width="100%"
          height="500px"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  );
}

export default VoiidOS;
