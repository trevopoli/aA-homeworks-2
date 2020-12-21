class TracksController < ApplicationController
    before_action :require_user!, only: %i(show new create)

    def new
        @album = Album.find_by(id: params[:album_id])
        render :new
    end

    def create
        track = Track.new(track_params)

        if track.save
            redirect_to track_url(track.id)
        else
            flash.now[:errors] = track.errors.full_messages
            render :new
        end
    end

    def show
        @track = Track.find_by(id: params[:id])
        render :show
    end

    def destroy
        track = Track.find_by(id: params[:id])
        track.destroy
        redirect_to bands_url
    end

    private
    def track_params
        params.require(:track).permit(:title, :album_id, :ord, :lyrics, :bonus)
    end
end