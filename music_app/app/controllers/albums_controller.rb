class AlbumsController < ApplicationController
    before_action :require_user!, only: %i(new create show destroy)

    def new
        @band = Band.find_by(id: params[:band_id])
        @album = Album.new
        render :new
    end

    def create
        album = Album.new(album_params)

        if album.save
            redirect_to album_url(album.id)
        else
            flash.now[:errors] = album.errors.full_messages
            render :new
        end
    end

    def show
        @album = Album.find_by(id: params[:id])
        render :show
    end

    def destroy
        album = Album.find_by(id: params[:id])
        album.destroy
        redirect_to bands_url
    end

    private
    def album_params
        params.require(:album).permit(:title, :band_id, :year, :live)
    end
end