class ApplicationController < ActionController::Base
    def after_sign_in_path_for(resource)
        challenges_index_path
    end
end
