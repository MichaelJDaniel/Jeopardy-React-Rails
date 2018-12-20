require 'test_helper'

class Api::CatagorysControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_catagorys_index_url
    assert_response :success
  end

  test "should get show" do
    get api_catagorys_show_url
    assert_response :success
  end

  test "should get create" do
    get api_catagorys_create_url
    assert_response :success
  end

  test "should get update" do
    get api_catagorys_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_catagorys_destroy_url
    assert_response :success
  end

end
