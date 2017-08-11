class FormsController < ApplicationController
  def finan
     UserMailer.welcome_email(finan_params).deliver_now
     redirect_to root_path, notice: 'Message was successfully sent!'
  end

  private

  def finan_params
    params.permit(:author, :email, :phone, :ciudad, :departamento, :cuota, :motolist, :plazo)
  end
end
