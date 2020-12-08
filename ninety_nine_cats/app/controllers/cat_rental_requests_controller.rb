class CatRentalRequestsController < ApplicationController


    def new
        render :new
    end

    def create
        cat_rental_request = CatRentalRequest.new(cat_rental_request_params)

        if cat_rental_request.save!
            render :new #should do :show once implemented
        else
            render :new
        end
    end

    private
    def cat_rental_request_params
        params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date)
    end

end