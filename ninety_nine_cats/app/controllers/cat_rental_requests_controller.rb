class CatRentalRequestsController < ApplicationController
    before_action :require_user!, only: %i(approve deny)

    def new
        render :new
    end

    def create
        cat_rental_request = CatRentalRequest.new(cat_rental_request_params)
        cat_rental_request.user_id = current_user.id
        
        if cat_rental_request.save!
            redirect_to cat_url(cat_rental_request.cat_id)
        else
            render :new
        end
    end

    def approve
        cat_rental_request = CatRentalRequest.find_by(id: params[:id])
        cat_rental_request.approve!
        redirect_to cat_url(cat_rental_request.cat_id)
    end

    def deny
        cat_rental_request = CatRentalRequest.find_by(id: params[:id])
        cat_rental_request.deny!
        redirect_to cat_url(cat_rental_request.cat_id)
    end

    private
    def cat_rental_request_params
        params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date)
    end

end