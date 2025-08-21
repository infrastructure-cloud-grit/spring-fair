{ pkgs, ... }: {

  # NOTE: This is an excerpt of a complete Nix configuration example.
  # For more information about the dev.nix file in Firebase Studio, see
  # https://firebase.google.com/docs/studio/customize-workspace

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    previews.web = {
        command = [ "${pkgs.python3}/bin/python" "-m" "http.server" "$PORT" ];
        manager = "web";
        # Optionally, specify a directory that contains your web app
        cwd = "src";
    };
  };
}
