require "test_helper"

class Challenges::CanvasControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get challenges_canvas_index_url
    assert_response :success
  end

  test "should get new" do
    get challenges_canvas_new_url
    assert_response :success
  end

  test "should get create" do
    get challenges_canvas_create_url
    assert_response :success
  end

  test "should get show" do
    get challenges_canvas_show_url
    assert_response :success
  end
end
