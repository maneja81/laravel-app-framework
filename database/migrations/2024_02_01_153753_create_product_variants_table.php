<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_variants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->string('sku')->unique();
            $table->unsignedBigInteger('hsn_code_id')->nullable();
            $table->string('name');
            $table->string('image')->nullable();
            $table->integer('stock')->default(0);
            $table->float('cost', 10, 2)->default(0.00);
            $table->float('price', 10, 2)->default(0.00);
            $table->float('compare_price', 10, 2)->default(0.00);
            $table->float('weight', 10, 2)->default(0.00);
            $table->string('status')->default('draft');
            $table->boolean('is_default')->default(false);
            $table->string('barcode')->nullable();
            $table->json('meta')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_variants');
    }
};
