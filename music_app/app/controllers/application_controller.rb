class ApplicationController < ActionController::Base
    helper_method :current_user
    helper_method :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !current_user.nil?
    end

    def log_in_user!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
    end

    def log_out_user!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def require_user!
        redirect_to new_session_url if current_user.nil?
    end

end
