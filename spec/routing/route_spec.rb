require 'spec_helper'
describe "routing to profiles" do
  it "routes /profile/:username to profile#show for username" do
    expect(:get => "/profiles/jsmith").to route_to(
      :controller => "profiles",
      :action => "show",
      :username => "jsmith"
    )
  end

  it "does not expose a list of profiles" do
    expect(:put => "/circle/groups/4").not_to be_routable
  end
end